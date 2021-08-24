import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsBrightnessProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsBrightness["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsBrightness["size"];
}
interface RuxIconSettingsBrightnessEvents {
}
interface RuxIconSettingsBrightnessSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsBrightness extends SvelteComponent {
    $$prop_def: RuxIconSettingsBrightnessProps;
    $$events_def: RuxIconSettingsBrightnessEvents;
    $$slot_def: RuxIconSettingsBrightnessSlots;
    $on<K extends keyof RuxIconSettingsBrightnessEvents>(type: K, callback: (e: RuxIconSettingsBrightnessEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsBrightnessProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsBrightnessElement | undefined;
}
export default RuxIconSettingsBrightness;
