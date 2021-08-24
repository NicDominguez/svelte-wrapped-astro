import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBusinessCenterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBusinessCenter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBusinessCenter["size"];
}
interface RuxIconBusinessCenterEvents {
}
interface RuxIconBusinessCenterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBusinessCenter extends SvelteComponent {
    $$prop_def: RuxIconBusinessCenterProps;
    $$events_def: RuxIconBusinessCenterEvents;
    $$slot_def: RuxIconBusinessCenterSlots;
    $on<K extends keyof RuxIconBusinessCenterEvents>(type: K, callback: (e: RuxIconBusinessCenterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBusinessCenterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBusinessCenterElement | undefined;
}
export default RuxIconBusinessCenter;
