import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFullscreenExitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFullscreenExit["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFullscreenExit["size"];
}
interface RuxIconFullscreenExitEvents {
}
interface RuxIconFullscreenExitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFullscreenExit extends SvelteComponent {
    $$prop_def: RuxIconFullscreenExitProps;
    $$events_def: RuxIconFullscreenExitEvents;
    $$slot_def: RuxIconFullscreenExitSlots;
    $on<K extends keyof RuxIconFullscreenExitEvents>(type: K, callback: (e: RuxIconFullscreenExitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFullscreenExitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFullscreenExitElement | undefined;
}
export default RuxIconFullscreenExit;
