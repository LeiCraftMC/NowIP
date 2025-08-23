import type PocketBase from 'pocketbase';

export function usePocketBase() {
    return useNuxtApp().$pb as PocketBase;
}
