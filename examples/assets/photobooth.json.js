loadGraph({
  "caseSensitive": false,
  "properties": {
    "name": "DomainFindActionsByDomainId",
    "description": "DomainFindActionsByDomainId",
    "icon": "file",
    "environment": {
      "type": "noflo-nodejs"
    }
  },
  "inports": {
    "request": {
      "process": "http.request-data-parser",
      "port": "request",
      "metadata": {
        "x": -108,
        "y": 252,
        "width": 72,
        "height": 72
      }
    },
    "redis": {
      "process": "domain.find-actions-by-agent-id",
      "port": "redis",
      "metadata": {
        "x": -108,
        "y": 36,
        "width": 72,
        "height": 72
      }
    }
  },
  "outports": {
    "out": {
      "process": "domain.find-actions-by-agent-id",
      "port": "out",
      "metadata": {
        "x": 720,
        "y": 36,
        "width": 72,
        "height": 72
      }
    },
    "error": {
      "process": "domain.find-actions-by-agent-id",
      "port": "error",
      "metadata": {
        "x": 684,
        "y": 288,
        "width": 72,
        "height": 72
      }
    }
  },
  "groups": [],
  "processes": {
    "domain.find-actions-by-agent-id": {
      "component": "alpha-nlu-api/domain.find-actions-by-agent-id",
      "metadata": {
        "label": "DomainFindActionByAgentId",
        "x": 396,
        "y": 180,
        "width": 72,
        "height": 72
      }
    },
    "http.request-data-parser": {
      "component": "alpha-nlu-api/http.request-data-parser",
      "metadata": {
        "label": "http.request-data-parser",
        "x": 72,
        "y": 252,
        "width": 72,
        "height": 72
      }
    }
  },
  "connections": [
    {
      "src": {
        "process": "http.request-data-parser",
        "port": "out"
      },
      "tgt": {
        "process": "domain.find-actions-by-agent-id",
        "port": "in"
      }
    }
  ]
});
