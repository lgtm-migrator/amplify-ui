import { Storage } from 'aws-amplify';
import { StorageAccessLevel, UploadTask } from '@aws-amplify/storage';

export function getFileName(
  file: File,
  fileName: string[],
  index: number
): string {
  // stub
  return '';
}

export function uploadFile({
  file,
  fileName,
  level = 'private',
  index,
}: {
  file: File;
  fileName: string;
  level: StorageAccessLevel;
  index: number;
}): UploadTask {
  // stub
  return;
}

/**
 * Format bytes as human-readable text.
 *
 * @param bytes Number of bytes.
 * @param si True to use metric (SI) units, aka powers of 1000. False to use
 *           binary (IEC), aka powers of 1024.
 * @param dp Number of decimal places to display.
 *
 * @return Formatted string.
 */
export function humanFileSize(bytes, si = false, dp = 1) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let unit = -1;
  const range = 10 ** dp;

  do {
    bytes /= thresh;
    ++unit;
  } while (
    Math.round(Math.abs(bytes) * range) / range >= thresh &&
    unit < units.length - 1
  );

  return bytes.toFixed(dp) + ' ' + units[unit];
}
