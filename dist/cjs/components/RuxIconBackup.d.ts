import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBackupProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBackup["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBackup["size"];
}
interface RuxIconBackupEvents {
}
interface RuxIconBackupSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBackup extends SvelteComponent {
    $$prop_def: RuxIconBackupProps;
    $$events_def: RuxIconBackupEvents;
    $$slot_def: RuxIconBackupSlots;
    $on<K extends keyof RuxIconBackupEvents>(type: K, callback: (e: RuxIconBackupEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBackupProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBackupElement | undefined;
}
export default RuxIconBackup;
