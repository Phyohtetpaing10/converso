"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import * as z from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Companion name is required."),
  subject: z.string().min(1, "Subject is required."),
  topic: z.string().min(1, "Topic is required."),
  voice: z.string().min(1, "Voice is required."),
  style: z.string().min(1, "Style is required."),
  duration: z.string().nonempty("Duration is required.").refine((val) => Number(val) >= 1, { message: "Duration must be at least 1 minute." }),
});

const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input
                {...field}
                id="name"
                aria-invalid={fieldState.invalid}
                placeholder="Enter the companion name"
                className="input"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="subject"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Subject</FieldLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="input capitalize" aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="Select the subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {subjects.map((subject) => (
                      <SelectItem
                        key={subject}
                        value={subject}
                        className="capitalize"
                      >
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="topic"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>What should the companion help with?</FieldLabel>
              <Textarea
                {...field}
                id="topic"
                aria-invalid={fieldState.invalid}
                placeholder="Ex. Derivates & Integrals"
                className="input"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="voice"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Voice</FieldLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="input " aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="Select the voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="style"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Style</FieldLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="input " aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="Select the style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="duration"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel>Estimated session duration in minutes</FieldLabel>
              <Input
                {...field}
                type="number"
                min={1}
                id="duration"
                aria-invalid={fieldState.invalid}
                placeholder="Enter the duration"
                className="input"
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button type="submit" className="w-full cursor-pointer">
        Build Your Companion
      </Button>
    </form>
  );
};

export default CompanionForm;
