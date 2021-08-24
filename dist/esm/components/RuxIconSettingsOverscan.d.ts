import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsOverscanProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsOverscan["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsOverscan["size"];
}
interface RuxIconSettingsOverscanEvents {
}
interface RuxIconSettingsOverscanSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsOverscan extends SvelteComponent {
    $$prop_def: RuxIconSettingsOverscanProps;
    $$events_def: RuxIconSettingsOverscanEvents;
    $$slot_def: RuxIconSettingsOverscanSlots;
    $on<K extends keyof RuxIconSettingsOverscanEvents>(type: K, callback: (e: RuxIconSettingsOverscanEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsOverscanProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsOverscanElement | undefined;
}
export default RuxIconSettingsOverscan;
