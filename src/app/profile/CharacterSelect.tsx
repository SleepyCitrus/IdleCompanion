"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string(),
  // .min(1, { message: "Username must be at least 1 character." })
  // .max(20, {
  //   message: "Username cannot be more than 20 characters.",
  // }),
});

interface CharacterSelectInterface {
  setUsername: (x: string) => void;
}

export default function CharacterSelect({
  setUsername,
}: CharacterSelectInterface) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.username?.length) {
      console.log(values);

      setUsername(values.username);
    }
  }

  return (
    <Card>
      <CardContent>
        <div
          className="flex flex-col"
          id="character-select-form-wrapper"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl className="flex flex-row w-full">
                        <div className="flex flex-row gap-2 items-end flex-wrap">
                          <div className="flex flex-col gap-2 flex-grow flex-shrink min-w-[300px] max-w-[500px]">
                            <FormLabel>Name</FormLabel>

                            <div
                              className="flex flex-row items-center px-3 border border-[color:hsl(var(--combobox-button-border))] bg-[color:hsl(var(--combobox-button-primary))] rounded-md  m-0"
                              id="character-select-input-wrapper"
                            >
                              <Search className="h-4 w-4 opacity-50 flex-shrink-0 flex-grow-0" />
                              <Input
                                placeholder="Search for character..."
                                className="px-0 pl-2 focus-visible:ring-0"
                                {...field}
                              />
                            </div>
                          </div>
                          <Button className="w-[100px]">Search</Button>
                        </div>
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </form>
          </Form>
          <i className="pt-4 text-sm text-[color:hsl(var(--stats-text-muted))]">
            Character names can only be a maximum of 20 characters
            long.
          </i>
        </div>
      </CardContent>
    </Card>
  );
}
