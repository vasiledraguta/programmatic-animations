import { OnboardFlow } from "@/components/onboard/OnboardFlow";
import { Aurora } from "@/components/onboard/Aurora";
import Source from "@/components/Source";

const HelloPage = () => {
  return (
    <div className="min-h-screen bg-[--color-background] flex items-center justify-center relative">
      <Aurora />
      <OnboardFlow />
      <div className="absolute bottom-4">
        <Source href="https://github.com/vasiledraguta/craft/tree/main/components/onboard" />
      </div>
    </div>
  );
};

export default HelloPage;
