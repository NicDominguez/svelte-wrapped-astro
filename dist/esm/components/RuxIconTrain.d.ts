import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTrainProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTrain["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTrain["size"];
}
interface RuxIconTrainEvents {
}
interface RuxIconTrainSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTrain extends SvelteComponent {
    $$prop_def: RuxIconTrainProps;
    $$events_def: RuxIconTrainEvents;
    $$slot_def: RuxIconTrainSlots;
    $on<K extends keyof RuxIconTrainEvents>(type: K, callback: (e: RuxIconTrainEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTrainProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTrainElement | undefined;
}
export default RuxIconTrain;
