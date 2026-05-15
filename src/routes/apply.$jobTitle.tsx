import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, Briefcase, Mail, User, GraduationCap, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/apply/$jobTitle")({
  head: ({ params }) => ({
    meta: [
      { title: `Apply for ${params.jobTitle.replace(/-/g, " ")} — Dark Elite Creations` },
      { name: "description", content: `Submit your application for the ${params.jobTitle.replace(/-/g, " ")} position at Dark Elite Creations.` },
    ],
  }),
  component: ApplyPage,
});

function ApplyPage() {
  const { jobTitle } = Route.useParams();
  const navigate = useNavigate();
  const formattedJobTitle = jobTitle.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    qualification: "",
    specialization: "",
    graduationYear: "",
    linkedin: "",
    github: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      // Check file type
      const allowedTypes = [".pdf", ".doc", ".docx"];
      const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      if (!allowedTypes.includes(fileExtension)) {
        toast.error("Please upload a PDF or Word document");
        return;
      }
      setResume(file);
      toast.success("Resume uploaded successfully");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!resume) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Application submitted successfully! We'll be in touch soon.");
      setIsSubmitting(false);
      // Navigate back to careers page after 2 seconds
      setTimeout(() => {
        navigate({ to: "/career" });
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <PageHero
        eyebrow="Job Application"
        title={
          <>
            Apply for <span className="text-gradient-red">{formattedJobTitle}</span>
          </>
        }
        subtitle="Fill out the form below to submit your application. We're excited to learn more about you!"
      >
        <Button variant="outline" onClick={() => navigate({ to: "/career" })}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Careers
        </Button>
      </PageHero>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 md:p-12 neon-border"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  Personal Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Mail className="h-6 w-6 text-primary" />
                  Contact Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      Mobile Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Educational Background */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Educational Background
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="qualification" className="text-base">
                      Highest Qualification <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      placeholder="Bachelor's in Computer Science"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization" className="text-base">
                      Specialization <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      placeholder="Software Engineering"
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear" className="text-base">
                      Year of Graduation <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="graduationYear"
                      name="graduationYear"
                      type="number"
                      min="1950"
                      max="2030"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      placeholder="2020"
                      required
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Resume / CV
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-base">
                    Upload Resume <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <Label
                      htmlFor="resume"
                      className="flex items-center justify-center gap-3 h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-background/50"
                    >
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <div className="text-center">
                        <p className="text-base font-medium">
                          {resume ? resume.name : "Click to browse or drag and drop"}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                      </div>
                    </Label>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary" />
                  Professional Links <span className="text-sm text-muted-foreground font-normal">(Optional)</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="text-base flex items-center gap-2">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn Profile
                    </Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/johndoe"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github" className="text-base flex items-center gap-2">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub Profile
                    </Label>
                    <Input
                      id="github"
                      name="github"
                      type="url"
                      value={formData.github}
                      onChange={handleInputChange}
                      placeholder="https://github.com/johndoe"
                      className="h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div>
                <div className="space-y-2">
                  <Label htmlFor="coverLetter" className="text-base">
                    Cover Letter <span className="text-sm text-muted-foreground">(Optional)</span>
                  </Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                    className="resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-border/50">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto min-w-[200px]"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  By submitting this application, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
