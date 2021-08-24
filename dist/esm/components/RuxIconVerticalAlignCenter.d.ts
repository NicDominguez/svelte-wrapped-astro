import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVerticalAlignCenterProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVerticalAlignCenter["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVerticalAlignCenter["size"];
}
interface RuxIconVerticalAlignCenterEvents {
}
interface RuxIconVerticalAlignCenterSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVerticalAlignCenter extends SvelteComponent {
    $$prop_def: RuxIconVerticalAlignCenterProps;
    $$events_def: RuxIconVerticalAlignCenterEvents;
    $$slot_def: RuxIconVerticalAlignCenterSlots;
    $on<K extends keyof RuxIconVerticalAlignCenterEvents>(type: K, callback: (e: RuxIconVerticalAlignCenterEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVerticalAlignCenterProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVerticalAlignCenterElement | undefined;
}
export default RuxIconVerticalAlignCenter;
