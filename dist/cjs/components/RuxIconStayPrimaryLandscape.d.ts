import { Components } from '@astrouxds/astro-web-components';
interface RuxIconStayPrimaryLandscapeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconStayPrimaryLandscape["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconStayPrimaryLandscape["size"];
}
interface RuxIconStayPrimaryLandscapeEvents {
}
interface RuxIconStayPrimaryLandscapeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconStayPrimaryLandscape extends SvelteComponent {
    $$prop_def: RuxIconStayPrimaryLandscapeProps;
    $$events_def: RuxIconStayPrimaryLandscapeEvents;
    $$slot_def: RuxIconStayPrimaryLandscapeSlots;
    $on<K extends keyof RuxIconStayPrimaryLandscapeEvents>(type: K, callback: (e: RuxIconStayPrimaryLandscapeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconStayPrimaryLandscapeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconStayPrimaryLandscapeElement | undefined;
}
export default RuxIconStayPrimaryLandscape;
