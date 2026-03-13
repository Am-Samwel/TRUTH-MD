FROM node:20

RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg imagemagick webp git python3 make g++ procps \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Clone private bot repo
ARG GITHUB_PAT
RUN git clone https://${GITHUB_PAT}@github.com/mzeeemzimanjejeje/Maintaining.git .

# Install dependencies
RUN npm install --legacy-peer-deps --ignore-scripts
RUN npm install -g node-gyp
RUN npm rebuild better-sqlite3
RUN npm install bufferutil encoding --legacy-peer-deps --ignore-scripts || true
RUN npm uninstall sharp --legacy-peer-deps && \
    SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install sharp@0.32.6 --legacy-peer-deps

EXPOSE 3000 5000

ENV NODE_ENV=production

CMD ["node", "--require", "./preload.cjs", "--max-old-space-size=512", "--optimize-for-size", "index.js"]
