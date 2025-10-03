import { addEnterpriseSchema } from "@/schemas/enterprise/add-enterprise-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/form";
import { Input } from "@repo/ui/components/input";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/(app)/enterprise/add-enterprise")({
  component: RouteComponent,
});

function RouteComponent() {
  const form = useForm<z.infer<typeof addEnterpriseSchema>>({
    resolver: zodResolver(addEnterpriseSchema),
    defaultValues: {
      address: "",
      description: "",
      email: "",
      name: "",
      phone: "",
      taxNumber: "",
      website: "",
    },
  });
  function onSubmit(values: z.infer<typeof addEnterpriseSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
