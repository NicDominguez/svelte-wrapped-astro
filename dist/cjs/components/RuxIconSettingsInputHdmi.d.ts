import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSettingsInputHdmiProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSettingsInputHdmi["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSettingsInputHdmi["size"];
}
interface RuxIconSettingsInputHdmiEvents {
}
interface RuxIconSettingsInputHdmiSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSettingsInputHdmi extends SvelteComponent {
    $$prop_def: RuxIconSettingsInputHdmiProps;
    $$events_def: RuxIconSettingsInputHdmiEvents;
    $$slot_def: RuxIconSettingsInputHdmiSlots;
    $on<K extends keyof RuxIconSettingsInputHdmiEvents>(type: K, callback: (e: RuxIconSettingsInputHdmiEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSettingsInputHdmiProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSettingsInputHdmiElement | undefined;
}
export default RuxIconSettingsInputHdmi;
