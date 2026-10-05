import { asOptionalField } from "@/lib/utils"
import { z } from "zod"

export const serviceFormSchema = z.object({
    cover: z.coerce.number().int().min(0),
    display_index: z.coerce.number().int(),
    duration: z.coerce.number().int().min(5),
    enable_trigger_task: asOptionalField(z.boolean()),
    hide_for_guest: asOptionalField(z.boolean()),
    fail_trigger_tasks: z.array(z.number()),
    fail_trigger_tasks_raw: z.string(),
    latency_notify: asOptionalField(z.boolean()),
    max_latency: z.coerce.number().int().min(0),
    min_latency: z.coerce.number().int().min(0),
    name: z.string().min(1),
    notification_group_id: z.coerce.number().int(),
    notify: asOptionalField(z.boolean()),
    recover_trigger_tasks: z.array(z.number()),
    recover_trigger_tasks_raw: z.string(),
    skip_servers: z.record(z.string(), z.boolean()),
    skip_servers_raw: z.array(z.string()),
    target: z.string(),
    type: z.coerce.number().int().min(0),
})
