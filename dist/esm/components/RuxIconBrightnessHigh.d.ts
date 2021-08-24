import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBrightnessHighProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBrightnessHigh["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBrightnessHigh["size"];
}
interface RuxIconBrightnessHighEvents {
}
interface RuxIconBrightnessHighSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBrightnessHigh extends SvelteComponent {
    $$prop_def: RuxIconBrightnessHighProps;
    $$events_def: RuxIconBrightnessHighEvents;
    $$slot_def: RuxIconBrightnessHighSlots;
    $on<K extends keyof RuxIconBrightnessHighEvents>(type: K, callback: (e: RuxIconBrightnessHighEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBrightnessHighProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBrightnessHighElement | undefined;
}
export default RuxIconBrightnessHigh;
