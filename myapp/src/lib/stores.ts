import { writable } from 'svelte/store';

export const isOpen = writable<boolean>(true);
