import { NotificationGroup, NotificationItem } from "../model/types";
import { getGroupLabel } from "./getGroupLabel";

export function groupNotificationsByDate(items: NotificationItem[]): NotificationGroup[] {
  const sorted = [...items].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
 
  const groups = new Map<string, NotificationItem[]>();
  for (const item of sorted) {
    const label = getGroupLabel(item.createdAt);
    const bucket = groups.get(label) ?? [];
    bucket.push(item);
    groups.set(label, bucket);
  }
 
  return Array.from(groups.entries()).map(([label, items]) => ({ label, items }));
}