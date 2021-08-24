import { Components } from '@astrouxds/astro-web-components';
interface RuxIconFolderSpecialProps {
    /** The fill color for the icon */
    color?: Components.RuxIconFolderSpecial["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconFolderSpecial["size"];
}
interface RuxIconFolderSpecialEvents {
}
interface RuxIconFolderSpecialSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconFolderSpecial extends SvelteComponent {
    $$prop_def: RuxIconFolderSpecialProps;
    $$events_def: RuxIconFolderSpecialEvents;
    $$slot_def: RuxIconFolderSpecialSlots;
    $on<K extends keyof RuxIconFolderSpecialEvents>(type: K, callback: (e: RuxIconFolderSpecialEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconFolderSpecialProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconFolderSpecialElement | undefined;
}
export default RuxIconFolderSpecial;
