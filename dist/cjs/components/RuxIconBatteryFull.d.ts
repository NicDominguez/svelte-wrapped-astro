import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBatteryFullProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBatteryFull["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBatteryFull["size"];
}
interface RuxIconBatteryFullEvents {
}
interface RuxIconBatteryFullSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBatteryFull extends SvelteComponent {
    $$prop_def: RuxIconBatteryFullProps;
    $$events_def: RuxIconBatteryFullEvents;
    $$slot_def: RuxIconBatteryFullSlots;
    $on<K extends keyof RuxIconBatteryFullEvents>(type: K, callback: (e: RuxIconBatteryFullEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBatteryFullProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBatteryFullElement | undefined;
}
export default RuxIconBatteryFull;
