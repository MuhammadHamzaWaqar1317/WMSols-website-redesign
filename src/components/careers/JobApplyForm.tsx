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

  overview: string;
  responsibilities: string[];
  requirements: string[];
  skills?: string[];
  perks?: string[];
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
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          // ✅ SUCCESS STATE
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">
              Application Submitted!
            </h3>
            <p className="text-muted-foreground mb-6">
              Thank you for applying to <strong>{job.title}</strong>. We’ll get
              back to you within 5–7 business days.
            </p>
            <Button onClick={handleClose}>Close</Button>
          </div>
        ) : (
          <>
            {/* 🔹 HEADER */}
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">
                {job.title}
              </DialogTitle>
              <DialogDescription>
                {job.location} • {job.type} • {job.category}
              </DialogDescription>
            </DialogHeader>

            {/* 🔹 OVERVIEW */}
            <section className="mt-4 space-y-2">
              <h4 className="font-semibold text-foreground">Overview</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {job.overview}
              </p>
            </section>

            {/* 🔹 RESPONSIBILITIES */}
            <section className="mt-5 space-y-2">
              <h4 className="font-semibold text-foreground">
                Responsibilities
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 🔹 REQUIREMENTS */}
            <section className="mt-5 space-y-2">
              <h4 className="font-semibold text-foreground">Requirements</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 🔹 SKILLS */}
            {job.skills && job.skills.length > 0 && (
              <section className="mt-5 space-y-2">
                <h4 className="font-semibold text-foreground">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* 🔹 PERKS */}
            {job.perks && job.perks.length > 0 && (
              <section className="mt-5 space-y-2">
                <h4 className="font-semibold text-foreground">
                  What You’ll Get
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {job.perks.map((perk, i) => (
                    <li key={i}>{perk}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 🔹 DIVIDER */}
            <div className="border-t my-6" />

            {/* 🔹 APPLICATION FORM */}
            <h3 className="font-heading text-lg font-semibold mb-4">
              Apply for this position
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="apply-name">Full Name *</Label>
                <Input
                  id="apply-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="apply-email">Email Address *</Label>
                <Input
                  id="apply-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Resume */}
              <div className="space-y-2">
                <Label>Upload Resume *</Label>
                <div
                  className={cn(
                    "relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer",
                    resume
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/50",
                  )}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />

                  {resume ? (
                    <div className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="text-sm">{resume.name}</span>
                      <button
                        type="button"
                        onClick={() => setResume(null)}
                        className="p-1 rounded hover:bg-secondary"
                      >
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click or drag to upload (PDF, DOC, DOCX)
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label>Cover Letter / Message (Optional)</Label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-md border px-3 py-2 text-sm resize-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* Actions */}
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
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
