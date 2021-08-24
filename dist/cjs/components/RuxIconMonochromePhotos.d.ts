import { Components } from '@astrouxds/astro-web-components';
interface RuxIconMonochromePhotosProps {
    /** The fill color for the icon */
    color?: Components.RuxIconMonochromePhotos["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconMonochromePhotos["size"];
}
interface RuxIconMonochromePhotosEvents {
}
interface RuxIconMonochromePhotosSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconMonochromePhotos extends SvelteComponent {
    $$prop_def: RuxIconMonochromePhotosProps;
    $$events_def: RuxIconMonochromePhotosEvents;
    $$slot_def: RuxIconMonochromePhotosSlots;
    $on<K extends keyof RuxIconMonochromePhotosEvents>(type: K, callback: (e: RuxIconMonochromePhotosEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconMonochromePhotosProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconMonochromePhotosElement | undefined;
}
export default RuxIconMonochromePhotos;
