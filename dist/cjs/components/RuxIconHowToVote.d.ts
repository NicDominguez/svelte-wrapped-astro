import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHowToVoteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHowToVote["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHowToVote["size"];
}
interface RuxIconHowToVoteEvents {
}
interface RuxIconHowToVoteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHowToVote extends SvelteComponent {
    $$prop_def: RuxIconHowToVoteProps;
    $$events_def: RuxIconHowToVoteEvents;
    $$slot_def: RuxIconHowToVoteSlots;
    $on<K extends keyof RuxIconHowToVoteEvents>(type: K, callback: (e: RuxIconHowToVoteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHowToVoteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHowToVoteElement | undefined;
}
export default RuxIconHowToVote;
