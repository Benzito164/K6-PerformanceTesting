FROM grafana/k6

COPY sample.js /sample.js

CMD ["run", "/sample.js"]
