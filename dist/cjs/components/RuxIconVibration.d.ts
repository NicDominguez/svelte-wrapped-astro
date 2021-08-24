import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVibrationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVibration["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVibration["size"];
}
interface RuxIconVibrationEvents {
}
interface RuxIconVibrationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVibration extends SvelteComponent {
    $$prop_def: RuxIconVibrationProps;
    $$events_def: RuxIconVibrationEvents;
    $$slot_def: RuxIconVibrationSlots;
    $on<K extends keyof RuxIconVibrationEvents>(type: K, callback: (e: RuxIconVibrationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVibrationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVibrationElement | undefined;
}
export default RuxIconVibration;
