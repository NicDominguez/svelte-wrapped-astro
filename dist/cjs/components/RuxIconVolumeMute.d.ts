import { Components } from '@astrouxds/astro-web-components';
interface RuxIconVolumeMuteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconVolumeMute["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconVolumeMute["size"];
}
interface RuxIconVolumeMuteEvents {
}
interface RuxIconVolumeMuteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconVolumeMute extends SvelteComponent {
    $$prop_def: RuxIconVolumeMuteProps;
    $$events_def: RuxIconVolumeMuteEvents;
    $$slot_def: RuxIconVolumeMuteSlots;
    $on<K extends keyof RuxIconVolumeMuteEvents>(type: K, callback: (e: RuxIconVolumeMuteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconVolumeMuteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconVolumeMuteElement | undefined;
}
export default RuxIconVolumeMute;
