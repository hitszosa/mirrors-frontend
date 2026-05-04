import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

const fetchHelpList = async () => {
  const res = await fetch(
    import.meta.env.DEV
      ? '/help_list.json'
      : 'https://mirrors-help.osa.moe/help_list.json',
  );

  if (!res.ok) {
    throw new Error(`Help list request failed with ${res.status}`);
  }

  return await res.json();
};

export const useHelpListStore = defineStore('help-list', () => {
  const helpList = ref<string[]>([]);

  const createData = async () => {
    try {
      helpList.value = await fetchHelpList();
    } catch {
      helpList.value = [];
    }
  };

  onMounted(async () => {
    await createData();
  });

  return {
    helpList,
  };
});
