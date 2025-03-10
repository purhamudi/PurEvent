

import vid1 from "@/assets/images/background/dump/videos/video1.mp4";
import { useState } from "react";
import { Button } from "../components/ui/button";



import { Input } from "../components/ui/input";


import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle
} from "../components/ui/dialog";
import ScrollSequenceEffect from "../sections/Homepage/ScrollSequence/ScrollSequenceEffect";
import Section1 from "../sections/Homepage/Section1/Section1";
import Section2 from "../sections/Homepage/Section2/Section2";
import Section3 from "../sections/Homepage/Section3/Section3";
import Section4 from "../sections/Homepage/Section4/Section4";
import Section5 from "../sections/Homepage/Section5/Section5";
import Section6 from "../sections/Homepage/Section6/Section6";
import Section7 from "../sections/Homepage/Section7/Section7";
import BackgroundVideo from "../utils/BackgroundVideo";
import BackgroundVideoContainer from "../utils/BackgroundVideoContainer";
import SectionFadeIn from "../utils/SectionFadeIn";


export default function HomePage() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>


      <div className="h-100 w-full">
        <BackgroundVideoContainer setDialogIsOpen={setDialogIsOpen}>
          <BackgroundVideo src={vid1}></BackgroundVideo>
        </BackgroundVideoContainer>
      </div>
      <Section1 />

      <Section2 />


      <div className="flex flex-col sm:flex-row items-center h-[450px] p-6">
        <ScrollSequenceEffect />
        
      </div>

      <div className="w-full text-[var(--foreground)]">
        <SectionFadeIn>
          <Section3 />
        </SectionFadeIn>
        <SectionFadeIn>
          <Section4 />
        </SectionFadeIn>
        <SectionFadeIn>
          <Section5 />
        </SectionFadeIn>
        <SectionFadeIn>
          <Section6 />
        </SectionFadeIn>
        <SectionFadeIn>
          <Section7 />
        </SectionFadeIn>

      </div>

      <WizardDialog isOpen={dialogIsOpen} setDialogIsOpen={setDialogIsOpen} />

    </>
  );
}

type DialogTestProps = {
  // handleContactUsClick:(message: string) => void;
  setDialogIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  // children: ReactNode
};

export function WizardDialog({ isOpen, setDialogIsOpen }: DialogTestProps) {
  // const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  // Stepper with Animated Dots & Lines
  const Stepper = () => (
    <div className="flex items-center w-full mb-6">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex items-center w-full">
          {`Step ${num}`}
        </div>
      ))}
    </div>
  );

  // Handles Next and Previous steps
  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex justify-center p-6">
      {/* Button to Open Dialog */}
      {/* <Button onClick={() => setIsOpen(true)}>Open Wizard</Button> */}

      <Dialog open={isOpen} onOpenChange={setDialogIsOpen}>
        <DialogOverlay className="bg-black/70" />
        <DialogContent className=" flex flex-col sm:max-w-5xl h-5/6 w-full min-h-[500px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Step {step} of {totalSteps}
            </DialogTitle>
          </DialogHeader>

          {/* Stepper UI */}
          <Stepper />

          {/* Step Forms */}
          <div className="p-4">
            {step === 1 && (
              <div>
                <label className="block text-sm font-medium">Name</label>
                <Input placeholder="Enter your name" />
              </div>
            )}
            {step === 2 && (
              <div>
                <label className="block text-sm font-medium">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>
            )}
            {step === 3 && (
              <div>
                <label className="block text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter your password" />
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <DialogFooter className="flex justify-between p-4">
            <Button variant="outline" onClick={prevStep} disabled={step === 1}>
              Back
            </Button>
            {step < totalSteps ? (
              <Button onClick={nextStep}>Next</Button>
            ) : (
              <Button onClick={() => setDialogIsOpen(false)}>Submit</Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
