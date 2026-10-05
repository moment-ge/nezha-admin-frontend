import { serviceFormSchema } from "@/types/service-form"
import { describe, expect, it } from "vitest"

const service = {
    cover: 0,
    display_index: 0,
    duration: 5,
    name: "三网 · 电信",
    target: "127.0.0.1",
    type: 2,
    notification_group_id: 0,
    max_latency: 0,
    min_latency: 0,
    fail_trigger_tasks: [],
    fail_trigger_tasks_raw: "",
    recover_trigger_tasks: [],
    recover_trigger_tasks_raw: "",
    skip_servers: {},
    skip_servers_raw: [],
}
describe("service monitoring form", () => {
    it("accepts the existing five-second carrier task for saving", () => {
        expect(serviceFormSchema.parse(service).duration).toBe(5)
    })
    it.each([0, -1, 4, 5.5])("rejects invalid monitoring intervals: %s", (duration) => {
        expect(serviceFormSchema.safeParse({ ...service, duration }).success).toBe(false)
    })
    it("keeps standard thirty-second monitors valid", () => {
        expect(serviceFormSchema.safeParse({ ...service, duration: 30 }).success).toBe(true)
    })
})
