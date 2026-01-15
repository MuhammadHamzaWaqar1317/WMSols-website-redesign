import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Upload, CheckCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { API_BASE_URL } from "@/config/api";

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  category: string;
  description: string;
  skills?: string[];
}

interface JobApplyFormProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
}

export function JobApplyForm({ job, isOpen, onClose }: JobApplyFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("email", formData.email);
    fd.append("message", formData.message);
    fd.append("jobTitle", job!.title);
    fd.append("jobLocation", job!.location);
    fd.append("jobType", job!.type);
    fd.append("resume", resume!);

    await fetch(`${API_BASE_URL}/apply-job`, {
      method: "POST",
      body: fd,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", message: "" });
    setResume(null);
    setIsSubmitted(false);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  if (!job) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
              Application Submitted!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for applying to <strong>{job.title}</strong>. We'll
              review your application and get back to you within 5-7 business
              days.
            </p>
            <Button onClick={handleClose}>Close</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">
                Apply for Position
              </DialogTitle>
              <DialogDescription>
                Submit your application for the role below.
              </DialogDescription>
            </DialogHeader>

            {/* Job Info */}
            <div className="bg-secondary/50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-foreground mb-1">
                {job.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {job.location} • {job.type}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="apply-name">Full Name *</Label>
                <Input
                  id="apply-name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apply-email">Email Address *</Label>
                <Input
                  id="apply-email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="apply-resume">Upload Resume *</Label>
                <div
                  className={cn(
                    "relative border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer",
                    resume
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50 hover:bg-secondary/50"
                  )}
                >
                  <input
                    id="apply-resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {resume ? (
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-sm text-foreground font-medium">
                        {resume.name}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setResume(null);
                        }}
                        className="ml-2 p-1 rounded-full hover:bg-secondary"
                      >
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="apply-message">
                  Cover Letter / Message (Optional)
                </Label>
                <textarea
                  id="apply-message"
                  placeholder="Tell us why you're interested in this role..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="accent"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
