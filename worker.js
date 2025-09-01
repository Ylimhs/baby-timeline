export default {
    async fetch(req, env) {
        const url = new URL(req.url);

        // 获取事件
        if (url.pathname === "/api/events") {
            const events = await env.BABY_EVENTS.get("events");
            return new Response(events || "[]", {
                headers: { "Content-Type": "application/json" }
            });
        }

        // 更新事件（手动上传 JSON）
        if (url.pathname === "/api/events/update" && req.method === "POST") {
            try {
                const data = await req.json();
                await env.BABY_EVENTS.put("events", JSON.stringify(data));
                return new Response(JSON.stringify({ success: true }), {
                    headers: { "Content-Type": "application/json" }
                });
            } catch (e) {
                return new Response(JSON.stringify({ success: false, error: e.message }), {
                    headers: { "Content-Type": "application/json" }
                });
            }
        }

        return new Response("Not Found", { status: 404 });
    }
};
