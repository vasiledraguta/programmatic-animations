  import { OnboardFlow } from "@/components/hello/OnboardFlow";
import { Aurora } from "@/components/hello/Aurora";

const HelloPage = () => {
  return (
    <div className="min-h-screen bg-[--color-background] flex items-center justify-center">
      <Aurora />
      <OnboardFlow />
    </div>
  );
};

export default HelloPage;
