import { useApi } from "./use-api";

export const useGetDisks = isManual =>
  useApi({
    url: `disks/`,
    state: 'disks',
    manual: isManual,
  });

export const useUpdateDisk = (id, isManual) =>
  useApi({
    url: `disks/${id}`,
    method: 'put',
    manual: isManual,
  });