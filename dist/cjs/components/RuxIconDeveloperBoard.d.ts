import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDeveloperBoardProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDeveloperBoard["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDeveloperBoard["size"];
}
interface RuxIconDeveloperBoardEvents {
}
interface RuxIconDeveloperBoardSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDeveloperBoard extends SvelteComponent {
    $$prop_def: RuxIconDeveloperBoardProps;
    $$events_def: RuxIconDeveloperBoardEvents;
    $$slot_def: RuxIconDeveloperBoardSlots;
    $on<K extends keyof RuxIconDeveloperBoardEvents>(type: K, callback: (e: RuxIconDeveloperBoardEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDeveloperBoardProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDeveloperBoardElement | undefined;
}
export default RuxIconDeveloperBoard;
