import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsBackupRestoreProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsBackupRestore["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsBackupRestore["size"];
}
interface RuxIconSettingsBackupRestoreEvents {
}
interface RuxIconSettingsBackupRestoreSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsBackupRestore extends SvelteComponent {
    $$prop_def: RuxIconSettingsBackupRestoreProps;
    $$events_def: RuxIconSettingsBackupRestoreEvents;
    $$slot_def: RuxIconSettingsBackupRestoreSlots;
    $on<K extends keyof RuxIconSettingsBackupRestoreEvents>(type: K, callback: (e: RuxIconSettingsBackupRestoreEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsBackupRestoreProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsBackupRestoreElement | undefined;
}
export default RuxIconSettingsBackupRestore;
