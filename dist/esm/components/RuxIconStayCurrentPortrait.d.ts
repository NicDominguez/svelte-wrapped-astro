import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStayCurrentPortraitProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStayCurrentPortrait["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStayCurrentPortrait["size"];
}
interface RuxIconStayCurrentPortraitEvents {
}
interface RuxIconStayCurrentPortraitSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStayCurrentPortrait extends SvelteComponent {
    $$prop_def: RuxIconStayCurrentPortraitProps;
    $$events_def: RuxIconStayCurrentPortraitEvents;
    $$slot_def: RuxIconStayCurrentPortraitSlots;
    $on<K extends keyof RuxIconStayCurrentPortraitEvents>(type: K, callback: (e: RuxIconStayCurrentPortraitEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStayCurrentPortraitProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStayCurrentPortraitElement | undefined;
}
export default RuxIconStayCurrentPortrait;
