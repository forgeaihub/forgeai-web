"use client";

import content from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ResumeRankerDemoModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export function ResumeRankerDemoModal({ isOpen, onCloseAction }: ResumeRankerDemoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-[2px] bg-black/10 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Resume Ranker Demo</h2>
          <button
            onClick={onCloseAction}
            className="text-black hover:text-gray-700 cursor-pointer"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <p className="text-black mb-6">
            {content.contactUs.subtitle}
          </p>

          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <form action="https://formspree.io/f/mjggblgg" method="POST" className="space-y-6">
                {/* Hidden meta to identify source */}
                <input type="hidden" name="context" value="Resume Ranker Demo" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>{content.contactUs.form.firstName.label}</Label>
                    <Input name="firstName" placeholder={content.contactUs.form.firstName.placeholder} required />
                  </div>
                  <div>
                    <Label>{content.contactUs.form.lastName.label}</Label>
                    <Input name="lastName" placeholder={content.contactUs.form.lastName.placeholder} required />
                  </div>
                </div>

                <div>
                  <Label>{content.contactUs.form.email.label}</Label>
                  <Input type="email" name="email" placeholder={content.contactUs.form.email.placeholder} required />
                </div>

                <div>
                  <Label>{content.contactUs.form.message.label}</Label>
                  <Textarea name="message" placeholder={content.contactUs.form.message.placeholder} required />
                </div>

                {/* Products-specific fields */}
                <div className="space-y-6 border-t border-black/10 pt-6">
                  <h3 className="text-lg font-semibold text-black">Resume Ranker – Early Access Questions</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Work Email (required)</Label>
                      <Input type="email" name="workEmail" placeholder="name@company.com" required />
                    </div>
                    <div>
                      <Label>Company Name (required)</Label>
                      <Input name="companyName" placeholder="Your company" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Your Role</Label>
                      <select
                        name="role"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
                        required
                      >
                        <option value="" disabled selected>
                          Select a role
                        </option>
                        <option value="Recruiter">Recruiter</option>
                        <option value="HR Manager">HR Manager</option>
                        <option value="Hiring Manager">Hiring Manager</option>
                        <option value="Founder / Director">Founder / Director</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label>Hiring Volume</Label>
                      <select
                        name="hiringVolume"
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
                        required
                      >
                        <option value="" disabled selected>
                          How many resumes per role?
                        </option>
                        <option value="Fewer than 20">Fewer than 20</option>
                        <option value="20–50">20–50</option>
                        <option value="50–100">50–100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label>Biggest Resume Screening Challenge (short text)</Label>
                    <Input name="challenge" placeholder="What’s the hardest part of screening resumes today?" />
                  </div>

                  <div>
                    <Label className="mb-2 block">Early Access Intent</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Save time screening resumes",
                        "Improve shortlist quality",
                        "Reduce bias in hiring",
                        "Support high-volume hiring",
                        "Exploring AI tools",
                      ].map((label) => (
                        <label key={label} className="flex items-center gap-2 text-sm text-black/90">
                          <input type="checkbox" className="h-4 w-4" name="earlyAccessIntent" value={label} />
                          <span>{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input id="bookChat" type="checkbox" className="h-4 w-4" name="bookChat" value="yes" />
                    <Label htmlFor="bookChat">I’m open to a 15-minute feedback call</Label>
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <Button type="button" variant="outline" onClick={onCloseAction} className="cursor-pointer">
                    Cancel
                  </Button>
                  <Button type="submit" className="text-white cursor-pointer">
                    {content.contactUs.form.submitButton}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
