import { Card, CardContent } from "@/src/components/ui/card";

interface Props {
  title: string;
  level: string;
  instructor: string;
  duration: string;
}

export default function CourseCard({
  title,
  level,
  instructor,
  duration,
}: Props) {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-md transition">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>

        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
          <p>Level: {level}</p>
          <p>Instructor: {instructor}</p>
          <p>Duration: {duration}</p>
        </div>
      </CardContent>
    </Card>
  );
}