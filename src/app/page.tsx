import { Button } from "@/components/button";

export default function Home() {
  const colStyles = "flex flex-col gap-2";

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-center text-3xl mb-4">React Generic Components</h1>
      <div className="flex gap-2">
        <div className={colStyles}>
          <Button variant="default">Default</Button>
          <Button variant="default" size={"sm"}>
            Default small
          </Button>
          <Button variant="default" disabled>
            Default Disabled
          </Button>
        </div>
        <div className={colStyles}>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" size={"sm"}>
            Secondary small
          </Button>
          <Button variant="secondary" disabled>
            Secondary Disabled
          </Button>
        </div>
        <div className={colStyles}>
          <Button variant="ghost">Ghost</Button>
          <Button variant="ghost" size={"sm"}>
            Ghost small
          </Button>
          <Button variant="ghost" disabled>
            Ghost Disabled
          </Button>
        </div>
      </div>
    </main>
  );
}
