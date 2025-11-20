"use client";

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function PhraseTeacher() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Phrase</CardTitle>
        <CardDescription>Bonjour</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Example 1: Bonjour, comment ça va?</p>
        <p>Example 2: Bonjour à tous!</p>
        <p>Example 3: Bonjour, je m&apos;appelle ChatGPT.</p>
      </CardContent>
    </Card>
  );
}
