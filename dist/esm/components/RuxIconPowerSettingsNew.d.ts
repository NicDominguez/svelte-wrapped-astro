import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPowerSettingsNewProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPowerSettingsNew["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPowerSettingsNew["size"];
}
interface RuxIconPowerSettingsNewEvents {
}
interface RuxIconPowerSettingsNewSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPowerSettingsNew extends SvelteComponent {
    $$prop_def: RuxIconPowerSettingsNewProps;
    $$events_def: RuxIconPowerSettingsNewEvents;
    $$slot_def: RuxIconPowerSettingsNewSlots;
    $on<K extends keyof RuxIconPowerSettingsNewEvents>(type: K, callback: (e: RuxIconPowerSettingsNewEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPowerSettingsNewProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPowerSettingsNewElement | undefined;
}
export default RuxIconPowerSettingsNew;
