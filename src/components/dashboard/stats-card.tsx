import { Card, CardContent } from "@/src/components/ui/card";

interface Props {
  title: string;
  value: string;
}

export default function StatsCard({
  title,
  value,
}: Props) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <h3 className="mt-4 text-3xl font-bold">
          {value}
        </h3>
      </CardContent>
    </Card>
  );
}