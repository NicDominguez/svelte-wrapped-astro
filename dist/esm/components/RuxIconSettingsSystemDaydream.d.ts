import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsSystemDaydreamProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsSystemDaydream["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsSystemDaydream["size"];
}
interface RuxIconSettingsSystemDaydreamEvents {
}
interface RuxIconSettingsSystemDaydreamSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsSystemDaydream extends SvelteComponent {
    $$prop_def: RuxIconSettingsSystemDaydreamProps;
    $$events_def: RuxIconSettingsSystemDaydreamEvents;
    $$slot_def: RuxIconSettingsSystemDaydreamSlots;
    $on<K extends keyof RuxIconSettingsSystemDaydreamEvents>(type: K, callback: (e: RuxIconSettingsSystemDaydreamEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsSystemDaydreamProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsSystemDaydreamElement | undefined;
}
export default RuxIconSettingsSystemDaydream;
