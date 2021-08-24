import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFitnessCenterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFitnessCenter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFitnessCenter["size"];
}
interface RuxIconFitnessCenterEvents {
}
interface RuxIconFitnessCenterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFitnessCenter extends SvelteComponent {
    $$prop_def: RuxIconFitnessCenterProps;
    $$events_def: RuxIconFitnessCenterEvents;
    $$slot_def: RuxIconFitnessCenterSlots;
    $on<K extends keyof RuxIconFitnessCenterEvents>(type: K, callback: (e: RuxIconFitnessCenterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFitnessCenterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFitnessCenterElement | undefined;
}
export default RuxIconFitnessCenter;
