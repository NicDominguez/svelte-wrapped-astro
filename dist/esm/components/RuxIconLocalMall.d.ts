import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalMallProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalMall["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalMall["size"];
}
interface RuxIconLocalMallEvents {
}
interface RuxIconLocalMallSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalMall extends SvelteComponent {
    $$prop_def: RuxIconLocalMallProps;
    $$events_def: RuxIconLocalMallEvents;
    $$slot_def: RuxIconLocalMallSlots;
    $on<K extends keyof RuxIconLocalMallEvents>(type: K, callback: (e: RuxIconLocalMallEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalMallProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalMallElement | undefined;
}
export default RuxIconLocalMall;
