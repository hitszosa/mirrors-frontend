import { defineStore } from 'pinia';
import dayjs from 'dayjs';
import { onMounted, ref } from 'vue';

type RowData = {
  id: number;
  name: string;
  files: string;
  lastUpdate: string;
  status: string;
};

type MirrorListItem = {
  name: string;
  last_update_ts: number;
  status: string;
};

const getMirrorListData = async () => {
  return await fetch('/tunasync_status.json');
};

export const useMirrorListStore = defineStore('mirror-list', () => {
  const rows = ref<RowData[]>([]);
  const rawData = ref<MirrorListItem[] | null>(null);
  const loading = ref(true);
  const errorMessage = ref('');

  const createData = async () => {
    loading.value = true;
    errorMessage.value = '';

    try {
      const tunasync = await getMirrorListData();

      if (!tunasync.ok) {
        throw new Error(`Mirror status request failed with ${tunasync.status}`);
      }

      const data = (await tunasync.json()) as MirrorListItem[];

      rawData.value = data;
      rows.value = data
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item, idx) => {
          return {
            id: idx,
            name: item.name,
            files: `/${item.name}/`,
            lastUpdate: dayjs
              .unix(item.last_update_ts)
              .format('YYYY-MM-DD HH:mm'),
            status: item.status,
          };
        });
    } catch {
      rawData.value = null;
      rows.value = [];
      errorMessage.value = 'Mirror list is temporarily unavailable.';
    } finally {
      loading.value = false;
    }
  };

  onMounted(async () => {
    await createData();
  });

  return {
    rows,
    loading,
    errorMessage,
    rawData,
  };
});
