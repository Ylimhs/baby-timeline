# baby-timeline
baby timeline recodes


## 部署
1. 创建 Cloudflare Worker，绑定 KV 命名空间 `BABY_EVENTS`
2. 上传 `worker.js` 并发布
3. 上传 `index.html` 到 Pages 或 Worker Assets
4. 使用 curl 上传事件 JSON
5. 访问页面查看时间线

## 更新事件
编辑 `events.json` 后：

```bash
curl -X POST https://your-worker.example.workers.dev/api/events/update \
  -H "Content-Type: application/json" \
  --data-binary @events.json
