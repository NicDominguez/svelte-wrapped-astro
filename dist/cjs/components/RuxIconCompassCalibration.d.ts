import { Components } from '@astrouxds/astro-web-components';
interface RuxIconCompassCalibrationProps {
    /** The fill color for the icon */
    color?: Components.RuxIconCompassCalibration["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconCompassCalibration["size"];
}
interface RuxIconCompassCalibrationEvents {
}
interface RuxIconCompassCalibrationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconCompassCalibration extends SvelteComponent {
    $$prop_def: RuxIconCompassCalibrationProps;
    $$events_def: RuxIconCompassCalibrationEvents;
    $$slot_def: RuxIconCompassCalibrationSlots;
    $on<K extends keyof RuxIconCompassCalibrationEvents>(type: K, callback: (e: RuxIconCompassCalibrationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconCompassCalibrationProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconCompassCalibrationElement | undefined;
}
export default RuxIconCompassCalibration;
