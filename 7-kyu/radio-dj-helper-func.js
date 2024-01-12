"use strict";

const songs = [{artist: "Artist", title: "Title String", playback: "04:30"}];

/**
 * solution 1
 * time: O(n * log n) -- sorting
 * space: O(n)
 * 
 * @param {number} maxPlaybackTime - max length of song (in seconds) 
 * @returns {string|false}
 */
function longestPossible(maxPlaybackTime) {
    const possibleSongs = songs.map((song) => {
        const [songMinutesStr, songSecondsStr] = song.playback.split(":");
        const totalSongTimeSeconds = (Number(songMinutesStr) * 60) + Number(songSecondsStr);
        
        return {
            ...song,
            playback: totalSongTimeSeconds
        };
    })
    .filter((song) => song.playback <= maxPlaybackTime)
    .sort((songA, songB) => songB.playback - songA.playback);

    if (possibleSongs.length > 0) {
        return possibleSongs[0].title;
    } else {
        return false;
    }
}

console.log(longestPossible(215));
